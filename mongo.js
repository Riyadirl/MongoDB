//Insert One and Many:
db.collection.insertOne({ field1: value1, field2: value2 });

db.collection.insertMany([
    { field1: value1, field2: value2 },
    { field1: value3, field2: value4 }
]);


// All Data
db.collection.find({});


//Row Count
db.collection.countDocuments({});


//Sorting:
db.collection.find({}).sort({ field: 1 }); // Ascending
db.collection.find({}).sort({ field: -1 }); // Descending


//Limiting:
db.collection.find({}).limit(limit);



//Select by Match Condition:
db.collection.find({ field: value });


// Select by Match Condition and OR:
db.collection.find({
    $or: [{ condition1 }, { condition2 }]
});


// Select Like(using Regular Expressions):
db.collection.find({ field: { $regex: "pattern" } });


//Select by Match In:
db.collection.find({ field: { $in: [value1, value2] } });


// Projection:
db.collection.find({}, { field1: 1, field2: 1 });


//  Skip and Limit:
db.collection.find({}).skip(skipValue).limit(limitValue);


//  Group By:
db.collection.aggregate([
    { $group: { _id: "$field", count: { $sum: 1 } } }
]);


//   Group By SUM / AVG / MAX / MIN:
db.collection.aggregate([
    { $group: { _id: "$field", total: { $sum: "$amount" } } }
]);


//  Group By AVG:
db.collection.aggregate([
    { $group: { _id: "$field", average: { $avg: "$amount" } } }
]);


//  Group By Max Min:
db.collection.aggregate([
    { $group: { _id: "$field", maxVal: { $max: "$value" }, minVal: { $min: "$value" } } }
]);


// Without Group By SUM / AVG / MAX / MIN:
db.collection.aggregate([
    { $group: { _id: null, total: { $sum: "$amount" } } }
]);


//   Group By Multiple:
db.collection.aggregate([
    { $group: { _id: { field1: "$field1", field2: "$field2" }, count: { $sum: 1 } } }
]);


//  Join by Lookup Operator:
db.collection1.aggregate([
    {
        $lookup: {
            from: "collection2",
            localField: "field1",
            foreignField: "field2",
            as: "joinedData"
        }
    }
]);


//   Facet Operator:
db.collection.aggregate([
    {
        $facet: {
            result1: [ /* aggregation pipeline 1 */],
            result2: [ /* aggregation pipeline 2 */]
        }
    }
]);


//  Projection After Join:
db.collection1.aggregate([
    {
        $lookup: {
            from: "collection2",
            localField: "field1",
            foreignField: "field2",
            as: "joinedData"
        }
    },
    {
        $project: {
            field1: 1,
            joinedData: 1
        }
    }
]);


//  Add New Field With Result:
db.collection.aggregate([
    {
        $addFields: {
            newField: { $multiply: ["$field1", "$field2"] }
        }
    }
]);


//  Arithmetic Aggregation Operators:
db.collection.aggregate([
    { $addFields: { totalAmount: { $add: ["$field1", "$field2"] } } }
]);


// String Aggregation Operators:
db.collection.aggregate([
    { $project: { fullName: { $concat: ["$firstName", " ", "$lastName"] } } }
]);


//  Date Aggregation Operators:
db.collection.aggregate([
    { $project: { year: { $year: "$dateField" } } }
]);


//   Comparison Aggregation Operators:
db.collection.aggregate([
    { $match: { age: { $gt: 30 } } }
]);


//   Boolean Aggregation Operators:
db.collection.aggregate([
    { $match: { $and: [{ condition1 }, { condition2 }] } }
]);



//  Conditional Aggregation Operators:
db.collection.aggregate([
    {
        $project: {
            status: {
                $cond: {
                    if: { $eq: ["$field", value] },
                    then: "Matched",
                    else: "Not Matched"
                }
            }
        }
    }
]);


