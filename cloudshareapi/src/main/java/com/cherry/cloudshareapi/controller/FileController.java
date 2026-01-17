package com.cherry.cloudshareapi.controller;

import java.io.IOException;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.cherry.cloudshareapi.dto.FileMetadataDTO;
import com.cherry.cloudshareapi.service.FileMetadataService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/files")
public class FileController {
	private FileMetadataService fileMetadataService;
	
	@PostMapping("/uploads")
	public ResponseEntity<?> uploadFiles(@RequestPart("files") MultipartFile files[]) throws IOException {
		
		List<FileMetadataDTO> response =  fileMetadataService.uploadFiles(files);
	}
}
