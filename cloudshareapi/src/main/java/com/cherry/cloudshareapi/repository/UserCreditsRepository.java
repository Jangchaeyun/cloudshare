package com.cherry.cloudshareapi.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.cherry.cloudshareapi.document.UserCredits;

public interface UserCreditsRepository extends MongoRepository<UserCredits, String> {
	
}
