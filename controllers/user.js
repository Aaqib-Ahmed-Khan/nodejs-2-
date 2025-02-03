export const register = async () => {
  try {
    const { fullname, email, password } = req.body;
    
    if (!fullname || !email || !password) {
      return res.status(403).json({
        success: false,
        message: "all fields are required.",
      });
    }
    //finding user if registered or not already
    const user = await User.findone(email);
    if (user) {
      return res.status(403).json({
        success: false,
        message: "this email id is already registered.",
      });
    }
    await user.create({
      fullname,
      email,
      password,
    });
    return res.status(201).json({
        success:true,
        message:"account created successfully."
    })
  } catch (error) {}
};
