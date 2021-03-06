import React, { useState, useEffect, createContext, useContext, useCallback } from 'react';
import { useHistory } from 'react-router-dom';




const AuthContext = createContext({});
const useAuth = () => useContext(AuthContext);
const defaultUser = {
  email: 'sandra@example.com',
  avatarUrl: 'https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/06.png'
}

function AuthProvider(props) {
  console.log("ASdasas")
  const history = useHistory();
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  


  const signUp = useCallback(async (email,password,Role,confirmPassword)=>{
  
    // Send create account request
    
    const resp = await fetch('http://localhost:8080/api/userSignup', {
      method: 'POST',
      cache: 'no-cache',
      mode: 'cors',
      headers:{
        "Content-type": "application/x-www-form-urlencoded;charset=UTF-8",
        "Accept": "application/json",
        "Accept-Charset": "utf-8"
      },
      body: new URLSearchParams({  
        email:email,  
        password:password,
        confirmPassword:confirmPassword,
        role:Role  
      }) 
    });
    const newResp = await resp.json()
    console.log('newResp', newResp)
    if(newResp.response.message === "your password should be 8-13 charas,special characters, lower and uppercase letters!cters with number")
    {
      
      // history.push('/create-account');
      window.alert("your password should be 8-13 charas,special characters, lower and uppercase letters!cters with number");
      history.push('/');
      history.replace('/create-account');

    }
    else if(newResp.response.message === "Congratulations account registered!")
    {
      window.alert("Congratulations account registered!");
      history.push('/login');
    }
    else if(newResp.response.message === "this account is already registered, please choose another one!")
    {
      window.alert("this account is already registered, please choose another one!");
      history.push('/');
      history.replace('/create-account');
    }
    console.log(email, password);
    // console.log(email, password);
    
    
     
     
  });
  

  
  const logIn = useCallback(async (email, password) => {
    // Send login request
    console.log("mmail",email)                                                                                                                                                                                                                                                                                                                       
   
    const resp = await fetch('http://localhost:8080/api/userLogin', {
      method: 'POST',
      cache: 'no-cache',
      mode: 'cors',
      headers:{
        "Content-type": "application/x-www-form-urlencoded;charset=UTF-8",
        "Accept": "application/json",
        "Accept-Charset": "utf-8"
      },
      body: new URLSearchParams({  
        email:email,  
        password:password,  
      }) 
    });
    const newResp = await resp.json() 
    console.log('newResp', newResp)
    console.log(email, password);
    
      
    if(newResp.response.message === "Oops your email is not registered!")
    {
      window.alert("Oops your email is not registered!");
      history.push('/ ');
      history.replace('/create-account');
    }
    else if(newResp.response.message === "Enter a correct password!")
    {
      window.alert("Enter a correct password!");
      history.push('/ ');
      history.replace('/login');
      
    }
    else if(newResp.response.message === "Login Successful!")
    {
      window.alert("Login Successful!");
      // history.push('/home')
      setUser({
        email,
        password,
        avatarUrl: defaultUser.avatarUrl
      });
      
    }
    //history.push('/login');
    //history.push('/home');
    
  }); 

  const logOut = useCallback(() => {
    // Clear user data

    setUser();
  }, []);

  useEffect(() => {
    // Retrieve and save user data on initial load

    setUser();
    setLoading(false);
    
  }, []);

  return (
    <AuthContext.Provider value={{ user, logIn,signUp,logOut, loading }} {...props} />
  );
}

export { AuthProvider, useAuth }
