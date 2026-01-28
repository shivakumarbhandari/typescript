// Create a User type. Add relevant properties with appropriate types (e.g, firstName, lastName, age, email, isActive), etc.
// Then write a function that takes a User object as a parameter and console.logs their information.
interface User {
    firstName: string;
    lastName: string;
    age: number;
    email: string;
    isActive: boolean;
}
const printUser = (user: User) =>{
    const{firstName, lastName, age, email, isActive} = user;
    console.log('My firstName is ${firstName} ${lastName}' );
    console.log('My age is ${age}');
    console.log('My email is ${email}');
    console.log('Account active: ${isActive}');

    
}
printUser({
    firstName:"Shiva",
    lastName:"Bhandari",
    age: 24,
    email:"shiva@gmail.com",
    isActive: true
});