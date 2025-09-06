// Define an interface for a Product
// An interface describes the structure of an object
interface Product {
  id: number;
  name: string;
  price: number;
  inStock: boolean;
}

// Define a class to manage a collection of products
class ProductManager {
  // Declare a private property to store the products
  private products: Product[] = [];

  // Method to add a new product
  public addProduct(product: Product): void {
    // Add the new product to the array
    this.products.push(product);
    console.log(`Added product: ${product.name}`);
  }

  // Method to get a product by its ID
  public getProductById(id: number): Product | undefined {
    // Use the find() method to search for a product
    return this.products.find(product => product.id === id);
  }

  // Method to list all products
  public listAllProducts(): void {
    console.log("--- All Products ---");
    this.products.forEach(product => {
      console.log(`ID: ${product.id}, Name: ${product.name}, Price: $${product.price}`);
    });
    console.log("--------------------");
  }
}

// --- Usage ---

// Create an instance of the ProductManager class
const manager = new ProductManager();

// Create new product objects that conform to the Product interface
const headphones: Product = { id: 1, name: "Noise-Cancelling Headphones", price: 199.99, inStock: true };
const keyboard: Product = { id: 2, name: "Mechanical Keyboard", price: 89.50, inStock: false };

// Add products to the manager
manager.addProduct(headphones);
manager.addProduct(keyboard);

// List all products currently in the manager
manager.listAllProducts();

// Find a specific product by its ID
// const foundProduct = manager.getProductById(1);
// if (foundProduct) {
//   console.log(`Found product with ID 1: ${foundProduct.name}`);
// } else {
//   console.log("Product not found.");
// }