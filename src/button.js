function Button({name,color = "red"}) {
    return ( 
        <><button 
        style={{color:color}}>{name}</button>
        
        </>
     );
}

export default Button;