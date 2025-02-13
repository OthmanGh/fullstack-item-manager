package dev.othman.item.repository;

import dev.othman.item.model.Item;

import org.springframework.data.mongodb.config.EnableMongoAuditing;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
@EnableMongoAuditing
public interface ItemRepository extends MongoRepository<Item, String> {
}
