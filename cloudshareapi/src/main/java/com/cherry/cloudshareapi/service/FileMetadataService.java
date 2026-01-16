package com.cherry.cloudshareapi.service;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import com.cherry.cloudshareapi.document.FileMetadataDocument;
import com.cherry.cloudshareapi.document.ProfileDocument;
import com.cherry.cloudshareapi.dto.FileMetadataDTO;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class FileMetadataService {
	private final ProfileService profileService;
	private final UserCreditsService userCreditsService;
	
	public List<FileMetadataDTO> uplpadFiles(MultipartFile files[]) throws IOException {
		ProfileDocument currentProfile = profileService.getCurrentProfile();
		List<FileMetadataDocument> savedFiles = new ArrayList<>();
		
		if (!userCreditsService.hasEnoughCredits(files.length)) {
			throw new RuntimeException("Not Enough credits to upload files. Please purchase more credits");
		}
		
		Path uploadPath = Paths.get("upload").toAbsolutePath().normalize();
		Files.createDirectories(uploadPath);
		
		for (MultipartFile file : files) {
			String fileName = UUID.randomUUID() + "." + StringUtils.getFilename(file.getOriginalFilename());
			Path targetLocation = uploadPath.resolve(fileName);
			Files.copy(file.getInputStream(), targetLocation, StandardCopyOption.REPLACE_EXISTING);
			
			FileMetadataDocument fileMetadata = FileMetadataDocument.builder()
					.fileLocation(targetLocation.toString())
					.name(file.getOriginalFilename())
					.size(file.getSize())
					.type(file.getContentType())
					.clerkId(currentProfile.getClerkId())
					.isPublic(false)
					.uploadedAt(LocalDateTime.now())
					.build();
		}
	}
}
