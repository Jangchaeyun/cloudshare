package com.cherry.cloudshareapi.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.cherry.cloudshareapi.document.FileMetadataDocument;

public interface FileMetadataRepository extends MongoRepository<FileMetadataDocument, String>{
	List<FileMetadataDocument> findByClerkId(String clerkId);

    Long countByClerkId(String clerkId);
}
