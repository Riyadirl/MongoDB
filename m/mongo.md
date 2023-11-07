Sure, let's dive deeper into each of the topics you mentioned with proper explanations and examples:

1. **Insert One and Many:**

   
   db.collection.insertOne({ field1: value1, field2: value2 });

   db.collection.insertMany([
     { field1: value1, field2: value2 },
     { field1: value3, field2: value4 },
   ]);
   ```

2. **Select All Data:**

       
   db.collection.find({});
   ```

3. **Row Count:**

       
   db.collection.countDocuments({});
   ```

4. **Sorting:**

       
   db.collection.find({}).sort({ field: 1 }); // Ascending
   db.collection.find({}).sort({ field: -1 }); // Descending
   ```

5. **Limiting:**

       
   db.collection.find({}).limit(limit);
   ```

6. **Limiting First and Last:**

   - MongoDB doesn't have a direct way to retrieve the last document without sorting, which might be inefficient.

7. **Select by Match Condition:**

       
   db.collection.find({ field: value });
   ```

8. **Select by Match Condition and OR:**

       
   db.collection.find({
     $or: [{ condition1 }, { condition2 }],
   });
   ```

9. **Select Like (using Regular Expressions):**

       
   db.collection.find({ field: { $regex: "pattern" } });
   ```

10. **Select by Match In:**

        
    db.collection.find({ field: { $in: [value1, value2] } });
    ```

11. **Projection:**

        
    db.collection.find({}, { field1: 1, field2: 1 });
    ```

12. **Skip and Limit:**

        
    db.collection.find({}).skip(skipValue).limit(limitValue);
    ```

13. **Group By:**

        
    db.collection.aggregate([
      { $group: { _id: "$field", count: { $sum: 1 } } },
    ]);
    ```

14. **Group By SUM/AVG/MAX/MIN:**

        
    db.collection.aggregate([
      { $group: { _id: "$field", total: { $sum: "$amount" } } },
    ]);
    ```

15. **Group By AVG:**

        
    db.collection.aggregate([
      { $group: { _id: "$field", average: { $avg: "$amount" } } },
    ]);
    ```

16. **Group By Max Min:**

        
    db.collection.aggregate([
      {
        $group: {
          _id: "$field",
          maxVal: { $max: "$value" },
          minVal: { $min: "$value" },
        },
      },
    ]);
    ```

17. **Without Group By SUM/AVG/MAX/MIN:**

        
    db.collection.aggregate([
      { $group: { _id: null, total: { $sum: "$amount" } } },
    ]);
    ```

18. **Group By Multiple:**

        
    db.collection.aggregate([
      {
        $group: {
          _id: { field1: "$field1", field2: "$field2" },
          count: { $sum: 1 },
        },
      },
    ]);
    ```

19. **Join by Lookup Operator:**

        
    db.collection1.aggregate([
      {
        $lookup: {
          from: "collection2",
          localField: "field1",
          foreignField: "field2",
          as: "joinedData",
        },
      },
    ]);
    ```

20. **Facet Operator:**

        
    db.collection.aggregate([
      {
        $facet: {
          result1: [
            /* aggregation pipeline 1 */
          ],
          result2: [
            /* aggregation pipeline 2 */
          ],
        },
      },
    ]);
    ```

21. **Projection After Join:**

        
    db.collection1.aggregate([
      {
        $lookup: {
          from: "collection2",
          localField: "field1",
          foreignField: "field2",
          as: "joinedData",
        },
      },
      {
        $project: {
          field1: 1,
          joinedData: 1,
        },
      },
    ]);
    ```

22. **Add New Field With Result:**

        
    db.collection.aggregate([
      {
        $addFields: {
          newField: { $multiply: ["$field1", "$field2"] },
        },
      },
    ]);
    ```

23. **Arithmetic Aggregation Operators:**

        
    db.collection.aggregate([
      { $addFields: { totalAmount: { $add: ["$field1", "$field2"] } } },
    ]);
    ```

24. **String Aggregation Operators:**

        
    db.collection.aggregate([
      { $project: { fullName: { $concat: ["$firstName", " ", "$lastName"] } } },
    ]);
    ```

25. **Date Aggregation Operators:**

        
    db.collection.aggregate([{ $project: { year: { $year: "$dateField" } } }]);
    ```

26. **Comparison Aggregation Operators:**

        
    db.collection.aggregate([{ $match: { age: { $gt: 30 } } }]);
    ```

27. **Boolean Aggregation Operators:**

        
    db.collection.aggregate([
      { $match: { $and: [{ condition1 }, { condition2 }] } },
    ]);
    ```

28. **Practices to Write MongoDB Queries:**

    - Use indexes for frequently queried fields.
    - Avoid large result sets; use pagination or limit appropriately.
    - Use aggregation when multiple operations are needed.
    - Optimize queries to utilize available indexes.

29. **Conditional Aggregation Operators:**
    
    db.collection.aggregate([
      {
        $project: {
          status: {
            $cond: {
              if: { $eq: ["$field", value] },
              then: "Matched",
              else: "Not Matched",
            },
          },
        },
      },
    ]);
    ```

Feel free to ask if you'd like more clarification or examples for any specific operation!
