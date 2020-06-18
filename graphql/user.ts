import { schema, use } from "nexus";
import { prisma } from "nexus-plugin-prisma";
import { hash, compare } from "bcryptjs" 
import { createAccessToken } from "./auth";


use(
  prisma({
    features: {
      crud: true
    }
  })
);

schema.objectType({
  name: "User",
  definition(t) {
    t.model.id();
    t.model.email();
    t.model.password();
    t.model.firstName();
    t.model.lastName();
    t.model.userType();
    t.model.status();
    t.model.invite();
  }
})

schema.objectType({
  name: "AuthPayload",
  definition(t) {
    t.string("accessToken")
  }
})

schema.queryType({
  definition(t) {
    t.crud.user();
    t.crud.users({
      ordering: true,
      filtering: true,
    });
  }
})

schema.mutationType({
  definition(t) {
    t.crud.createOneUser();
    t.crud.deleteOneUser();
    t.crud.updateOneUser();
    
    t.field("signUp", {
      type: "String",
      args: {
        email: schema.stringArg({required: true}),
        firstName: schema.stringArg({required: true}),
        lastName: schema.stringArg({required: true})
      },
      async resolve(_parent, args, ctx) {
        const generatedPassword = Math.random().toString().substr(2, 5)
        const hashedPassword = await hash(generatedPassword, 12 )
        const result = await ctx.db.user.create({
          data: { ...args, 
              password: hashedPassword,
              userType: 'Novice'
            } 
        })
        if(!result) {
          return "Sign up failed";
        } 
        return "Sign up success";
      }
    }) 

    t.field("signIn", {
      type: "AuthPayload",
      args: {
        email: schema.stringArg({ required: true }),
        password: schema.stringArg({ required: true })
      },
      async resolve(_parent, {email, password}, ctx) {
        const user = await ctx.db.user.findOne({
          where: { email }
        })
        if (!user) {
          throw new Error(`User does not exist`)
        }
        const passwordValid = await compare(password, user.password as string)
        if (!passwordValid) {
          throw new Error('Invalid password')
        }
        return { 
            accessToken: createAccessToken(user)
        }
      }
    })
  }
})
