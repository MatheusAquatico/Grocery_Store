# Follow up questions

## 1. How long did you spend on the test? What would you add if you had more time?
- I spent approximately 4 days on the test.
- If I had more time, I would:
  - Add more functionalities, like the possibility of creating a purchase and viewing the purchase history.
  - Improve the user interface for better usability and aesthetics.
  - Implement authentication and authorization mechanisms.
  - Optimize the codebase for better performance.
  - Write comprehensive unit tests for better code coverage.  

## 2. What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.
- The most useful feature added to Java 17 was the Records. Records provide a compact syntax for declaring classes which are supposed to be immutable data carriers. This feature is particularly useful when creating Data Transfer Objects (DTOs).
- Below is the definition of the ProductDTO:

```java
public record ProductDTO(
    String id,
    @NotBlank
    @NotNull
    String name,
    @NotNull
    int price,
    @Nullable
    List<PromotionDTO> promotions
) {
}
```
## 3. What did you find most difficult?
- I spent a part of my development time on the frontend because I wanted to create a joyful experience for the user. I came up with a user-friendly layout, chose a color palette that is useful, attractive, and complements the theme. I adjusted the style to be useful on small screens as well, and I added a lot of features that improve the overall experience.

## 4. What mechanism did you put in place to track down issues in production on this code? If you didn’t put anything, write down what you could do.
- I could add a log that tracks all the messages on the backend, especially the errors. This way, in the event of breaks occurring in production, we would be able to easily track these errors and fix them promptly.

## 5. The Wiremock represents one source of information. We should be prepared to integrate with more sources. List the steps that we would need to take to add more sources of items with diferent formats and promotions.
- In order to add more items with different formats and promotions, we need to implement a database to store all the records of items and promotions. This way, we could store as many items as we want, and we would know which properties to expect when requesting an item, even if each item does not fulfill all the properties. Consequently, we can verify for null values and decide how to manage them.
