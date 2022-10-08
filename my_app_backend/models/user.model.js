module.exports = mongoose => {
    const User = mongoose.model(
        "user",
        mongoose.Schema(
            {
                email:String,
                password:String,
                rememberMe:Boolean
            },
            {timestamps:true}
        )
    );
    return User
}