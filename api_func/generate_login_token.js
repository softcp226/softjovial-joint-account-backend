const joint_account_login_token=require("../model/joint_account_login_token")


const generate_primary_token=async(user)=>{
const token=  Math.floor( Math.random()*90000)+10000
const primary_token=await new joint_account_login_token({
    user:user,
    token,
})
await primary_token.save()
return token
}

const generate_secondary_token=async(user)=>{
    const token=  Math.floor( Math.random()*90000)+10000
    const secondary_token=await new joint_account_login_token({
        user:user,
        token,
    })
    await secondary_token.save()
    return token
}


module.exports={generate_primary_token,generate_secondary_token}