// Define a generic function called 'identity'
// The '<T>' makes the function generic. 'T' is a type variable.
function identity<T>(arg: T): T {
  // This function simply returns the argument it received
  return arg;
}

// --- Usage ---

// Example 1: With a number
// TypeScript infers the type of T to be 'number'
const myNumber = identity(123);
console.log(`The type is inferred as number. Value: ${myNumber}`);

// Example 2: With a string
// TypeScript infers the type of T to be 'string'
const myString = identity("hello world");
console.log(`The type is inferred as string. Value: ${myString}`);

// Example 3: With an array of booleans
// You can also explicitly specify the type
const myBooleanArray = identity<boolean[]>([true, false, true]);
console.log(`The type is explicitly set to boolean[]. Value: ${myBooleanArray}`);

// Example 4: A custom object
interface User {
  id: number;
  name: string;
}

const myUser: User = { id: 1, name: "Alice" };
const returnedUser = identity<User>(myUser);
console.log(`The type is a custom interface 'User'. Value:`, returnedUser);


class BankAccount {
  public accountNumber: string;
  private balance: number;

  constructor(accountNumber: string, initialBalance: number) {
    this.accountNumber = accountNumber;
    this.balance = initialBalance;
  }

  deposit(amount: number): void {
    this.balance += amount;
  }

  getBalance(): number {
    return this.balance;
  }
}

const account = new BankAccount("123ABC", 1000);
account.deposit(500);
console.log(account.getBalance()); // Output: 1500
