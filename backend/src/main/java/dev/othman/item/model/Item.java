package dev.othman.item.model;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

@Document(collection = "items")
public class Item {

    @Id
    private ObjectId id;
    @NotBlank(message = "Name is required")
    private String name;
    @NotNull(message = "Price is required")
    private Double price;
    private String description;

    public Item(String name, Double price, String description) {
        this.name = name;
        this.price = price;
        this.description = description;
    }

    // Getters & Setters :)
    public ObjectId getId(){
        return id;
    }

    public void setId(ObjectId id) {
        this.id = id;
    }

    public String getName(){
        return name;
    }

    public void setName (String name){
        this.name = name;
    }

    public Double getPrice(){
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getDescription(){
        return description;
    }

    public void setDescription(String description){
        this.description = description;
    }
}