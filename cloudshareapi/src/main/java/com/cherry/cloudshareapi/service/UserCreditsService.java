package com.cherry.cloudshareapi.service;

import org.springframework.stereotype.Service;

import com.cherry.cloudshareapi.document.UserCredits;
import com.cherry.cloudshareapi.repository.UserCreditsRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserCreditsService {
	
	private final UserCreditsRepository userCreditsRepository;
	
	public UserCredits createInitialCredits(String clerkId) {
		UserCredits userCredits = UserCredits.builder()
			.clerkId(clerkId)
			.credits(5)
			.plan("BASIC")
			.build();
		
		return userCreditsRepository.save(userCredits);
	}
}
