package com.cherry.cloudshareapi.service;

import java.time.Instant;

import org.springframework.stereotype.Service;

import com.cherry.cloudshareapi.document.ProfileDocument;
import com.cherry.cloudshareapi.dto.ProfileDTO;
import com.cherry.cloudshareapi.repository.ProfileRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ProfileService {
	private final ProfileRepository profileRepository;
	
	public ProfileDTO createProfile(ProfileDTO profileDTO) {
		
		ProfileDocument profile = ProfileDocument.builder()
			.clerkId(profileDTO.getClerkId())
			.email(profileDTO.getEmail())
			.firstName(profileDTO.getFirstName())
			.lastName(profileDTO.getLastName())
			.photoUrl(profileDTO.getPhotoUrl())
			.credits(5)
			.createdAt(Instant.now())
			.build();
		
		profile = profileRepository.save(profile);
		
		ProfileDTO.builder()
			.id(profile.getId())
			.clerkId(profile.getClerkId())
			.email(profile.getEmail())
			.firstName(profile.getFirstName())
			.lastName(profile.getLastName())
			.photoUrl(profile.getPhotoUrl())
			.credits(profile.getCredits())
			.createdAt(profile.getCreatedAt())
			.build();
	}
}
