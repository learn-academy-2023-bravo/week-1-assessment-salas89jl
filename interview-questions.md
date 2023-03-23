# ASSESSMENT 1: Tech Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview. If you don't know the answer a good tip is to answer a simpler version of the question.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

INSTRUCTOR EXAMPLE: What is a conditional statement?

Your answer:

Researched answer:

1. What is git? What is the difference between git and Github?

Your answer: While git is the a form of comceptualized code sharing type platform, Github is a site that is based on the git platform. 

Researched answer: According to open ai.:
Git is a system that uses a distrubuting version control, which allows developvers to record the changes to ther code and collaborate with other on software projects. In 2005 Linus Torvalds created the git system, and git was "designed to be fast, scalable, and flexible." Git gave developers the ability to create branches, merge changes in codes, and "revert to previous versions of thier code." 

While Github, in comparison to git, is a web-based hosting service for Git repositories, and "was fouded in 2008 and is now owned by Microsof. Github provides a platform  for dvelopers to stor, share, and collaborate on thier code. 

2. Which JavaScript operators will return a Boolean value?

Your answer:
===

Researched answer: (from: OpenAI) (Summerized by Jose)
There are many JS operators that will return a Boolean value. These types of operators are used often in conditional statements to control the program flow of execution. The following are examples of operators that return a Boolean value:

a. Comparison operators: ==, ===, !=, !==, <, >, <=, >=
b. Logical operators: &&, ||, !
c. Equality operators: Object.is(), Object.isnt()

3. What is an index? What is the difference between index and value?

Your answer: The best way I can describe an index is by imagining a cubby hole set that only has one row. This one row cuby hole has collapsable inner walls that be re arranged to custom fit each cubby. however, this is a magical cubby hole because we can add or take out as many indiviual cubies as we want to. But is this case, keeping the cubby hole to 5 cubbies is good for now. And we decided to label each cubie, and wanted to be labeled by numbers. we start at the first one on the left and we will label it "0", the next cubie "1", and so on until we reach the 5 cubie labeled "4". 

Using the cubby holes anology, I consider the index of an array as being the same as each cubby hole. arrayOne.index "1" = Second slot to left of an actual cubby hole.

As for value of an array, it is the product/element that is inserted, altered, or removed in each cuby hole.

c

 ------- ------- -------
|       |       |       |
|       |       |       |
|       |       |       |
 ------- ------- -------
    0       1       2
    index/cubie hole
Researched answer:

4. Compare and contrast arrays and strings. Please include ways in which they are the same and ways in which they are different.

Your answer: Keeping in my the cubby hole anology from question 3. I like to think about strings differently. Strings are more like text banners made up from characters hoisted on clothes lines. They can be small or large banners, size depending of the input of characters.

While both may contian objects(such as a collection of characters)/elements one us designed to be able to contain more than just a list of charaters. 

Researched answer: (from: OpenAI) 

"While arrays and strings share some similarities in terms of how they are accessed and how their length is determined, they differ in terms of thier mutability, they types of values they can store, and the methods and features available for manipulating and working with them."

Similarities:
- Both are type of data structures in JS.
- Both store data, with strings storing sequences of characters and arrays storing collection of values.
- Both can be accessed using bracket notation, where index represents the [p]osition of the value in the data structure.
- Both have a length property that indicates the number of elelemtns in the data structure. 

Differences:
- Strings are immutable, meaing that once created they cannot be changed. You can create a new string by concatenating or clicing parts of the original string, but the original string remains the same. Arrays, however, are mutable. You can change an array's elements by adding, removing, or modifying values in the array. 
- Arrays have a variety of built-in methods for manipulating and iterating while string have fewer. 
- Strings have some features that are not presented in arrays, such as the ability to use string interpolation with template literal. And, the ability use regular expressions to search and manipulate the string.

5. Give a brief description of proper pair programming techniques. What are the roles of each person?

Your answer: Proper Pair programming techniques include establising responsibilities such as one person assumes the role of Driver and the other(s) role of Navigator(s). The driver physically manipulates the code in the IDE while engaging with the Navigator(s) in order to accomplish tasks. While the Navigators guides, backup review for proper syntax entries, and researches additional options for issues that may arrise while programming.  Another technieque in pair programming is developing a plan to follow for excuting a task assigned to the pair. 

Researched answer: (from: OpenAI)

Pair programming is a programming technique where two programmers work together on the same task, using a single computer. Proper pair programming techniques involve a structured approach to the collaboration that maximizes productivity, communication, and teamwork.

The two main roles in pair programming are the driver and the navigator. The driver is the person who is actively typing at the computer, writing the code. The navigator is the person who is responsible for reviewing the code as it is being written, identifying potential issues and suggesting improvements.

Here are some best practices for proper pair programming techniques:

Establish clear goals and expectations: The pair should discuss what they hope to accomplish and what the expectations are for the session.

Rotate roles regularly: It's important to switch roles regularly so that both team members have an opportunity to take on different responsibilities and stay engaged.

Communicate frequently: The pair should communicate frequently to ensure that they are on the same page and that any issues are addressed in a timely manner.

Take breaks: Regular breaks can help maintain focus and prevent burnout.

Emphasize teamwork: Pair programming is a collaborative effort, so it's important to work together as a team and listen to each other's ideas.

Review code regularly: The navigator should review the code as it is being written, looking for potential issues and suggesting improvements.

By following these guidelines, pair programming can be an effective and efficient way to develop high-quality code.

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. Higher Order Functions: (From OpenAI)
Higher order functions are functions that can take funcitons as arguments and or return function as ther output. This means that they treat functions as data, "allowing for powerful abstraction and functional programming patterns.

2. Jest: (From OpenAI)
Jes is a popular JavaScript testing framework that is ofent used for testing React applications. It provides an easy-to-use API for writing tests, and includes features such as mocking and code coverage analysis.

3. Objects: (From OpenAI)
In JavaScript, an object is a collection of key-value pairs, where the keys are strings and the values can be any data type, including other objects. Objects are fundamental part of JavaScript and are often used to represent real-world entities and data structures. 

4. Method: (From OpenAI)
A method is funciton that is asociated with an object. tit can valled on the object, adn can access and modify the object's properties. In JavaScript, methods are defined as functions withing an object's property.

5. Classes: (From OpenAI)
In object-oriented programming, a class is a blueprint or template for creating objects. it defines the properties and behavior that the objets will have . In JavaScript, clases were introduced in ES5 and provide a more intuitive and consie syntax for creating objects and defining thier properties and methods. 