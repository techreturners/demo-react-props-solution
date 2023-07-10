// interface UserProps {name: string, age: number}; 

// We are currently anonymously defining the type here like this <{ name: string, age: number}>
// But we could make this type resuable by creating an interface like above (line 1)

// We pass our User component "props" - we could pass the whole prop object like (props) meaning we'd access them like props.name etc
// But here we are "destructuring" i.e. pulling out the properties we want to use

const User : React.FC<{name: string, age: number}> = ({name, age}) => <>
    <h2>My name is {name} and I am {age}</h2>
</>;

export default User;