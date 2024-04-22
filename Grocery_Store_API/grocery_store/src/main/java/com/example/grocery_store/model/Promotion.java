package com.example.grocery_store.model;

import lombok.Data;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import org.springframework.lang.Nullable;

@Data
@JsonInclude(JsonInclude.Include.NON_EMPTY)
public class Promotion {

    @Id
    private String id;

    @NotBlank
    private String type;

    @Nullable
    @JsonProperty("required_qty")
    private Integer requiredQty;

    @Nullable
    private Integer price;

    @Nullable
    @JsonProperty("free_qty")
    private Integer freeQty;

    @Nullable
    private Integer amount;

}
