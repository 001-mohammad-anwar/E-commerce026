
import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
   username: {
        type: String,
        required: [true, "Username is required"],
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true // Ensure email is unique
    },
    password: {
        type: String,
        required: [true, "Password is required"],
    },
    avatar: {
        type: String,
        default: ""
    },
    mobile: {
        type: Number,
        default: null
    },
    refresh_token: {  // ✅ FIXED: Changed `type: string` to `type: String`
        type: String,
        default: ""
    },

    verify_email: {
        type: Boolean,
        default: false
    },

    last_login_date: { // ✅ FIXED: Default should be `null`
        type: Date,
        default: null
    },
    
    status: {  // ✅ FIXED: Changed `type: string` to `type: String`
        type: String,
        enum: ["Active", "Inactive", "Suspended"],
        default: "Active"
    },

    address_details: [
        {
            type: mongoose.Schema.ObjectId,
            ref: "address"  
        }
    ],
    shopping_cart: [
        {
            type: mongoose.Schema.ObjectId,
            ref: "cartProduct" 
        }
    ],
    orderHistory: [
        {
            type: mongoose.Schema.ObjectId,
            ref: "order" 
        }
    ], 

    frogot_password_otp: {
        type: String,
        default: null
    },

    forgot_password_expiry: {  // ✅ FIXED: Default should be `null`
        type: Date,
        default: null
    },

    role: {  // ✅ FIXED: Changed `type: string` to `type: String`
        type: String,
        enum: ['ADMIN', 'USER'],
        default: "USER"
    },
    
    isAdmin: {
        type: Boolean,
        default: false
    }
},{
    timestamps: true
});

export default mongoose.model("User", userSchema);