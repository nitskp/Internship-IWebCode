# Discard reason
There were a lot of problems in it. Some of them are:
1. Extra Components used. Can be made using fewer component. Eg - Details component is not needed.
2. Props are not properly named. Tried to resolve that by using interfaces and defining in them what they are, but they open up even more problems. Props are repeatedly sent. There's no use in sending same prop from one componenet especially if it's a prop that is used in the current component.(Don't know if this is problem or not, but I don't like it.)
3. Try to add comments to make clear about what code was doing, but it was too much work. Gotta see the problems though. (Suggestion - Should add comments in code from now)
4. Making the formsection adding dynamically caused too much problems. I tried to use one formsection for too much things. There's no need for that and I overcomplicate the data structure too complicated. Need to add exception too much time and the benefit of dynamic adding went away. (Well was a good practice though. Will remember how to create them properly next time.)

## Lesson's Learned
1. Too much componenets are as harmful as too little components. No, need to make them too much.
2. Don't try to make code too much dynamic. Only use it when necessary, otherwise too many bugs occur and time waste away. 

### Comments
Didn't like the directory structure of nesting components inside components. It doesn't look pleasing and is a lot of time wastes away.