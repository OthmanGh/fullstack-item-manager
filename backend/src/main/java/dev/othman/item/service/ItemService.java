package dev.othman.item.service;

import dev.othman.item.model.Item;
import dev.othman.item.repository.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ItemService {
    private final ItemRepository itemRepository;

    @Autowired
    public ItemService(ItemRepository itemRepository) {
        this.itemRepository = itemRepository;
    }

    public Item createItem(Item item) {
        return itemRepository.save(item);
    }

    public Optional<Item> getItemById(String id) {
        return itemRepository.findById(id);
    }

    public List<Item> getAllItems() {
        return itemRepository.findAll();
    }

    public Item updateItem(String id, Item updatedItem) {
        return itemRepository.findById(id)
                .map(existingItem -> {
                    existingItem.setName(updatedItem.getName());
                    existingItem.setPrice(updatedItem.getPrice());
                    existingItem.setDescription(updatedItem.getDescription());
                    existingItem.setCategory(updatedItem.getCategory());
                    existingItem.setInStock(updatedItem.isInStock());
                    return itemRepository.save(existingItem);
                })
                .orElseThrow(() -> new RuntimeException("Item not found with id: " + id));
    }

    public void deleteItem(String id) {
        itemRepository.deleteById(id);
    }
}