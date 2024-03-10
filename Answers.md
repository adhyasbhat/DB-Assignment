1. Explain the relationship between the "Product" and "Product_Category" entities from the above diagram.
Ans. The releationship between Product and Product_Category is many-to-one i.e. many products fall into same Product category.
Example: phone, T.V, refrigator fall into a category Electronics

2. How could you ensure that each product in the "Product" table has a valid category assigned to it?
Ans. To ensure product in product has a valid category we can use middleware such as mongoose to validate/ populate category field with the corresponding category data
Code Snippet :
const products = await Product.find().populate('category_id').exec()
if(products){
    console.log("valid category")
}
else console.log("invalid category")
--------------------------OR-----------------------------
const category = await ProductCategory.findById(this.category_id);
        if (!category) {
            throw new Error("Invalid category ID");
        }