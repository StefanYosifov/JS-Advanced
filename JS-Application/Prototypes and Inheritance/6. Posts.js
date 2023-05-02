function solution(){
    class Post{
        constructor(title,content){
            this.title=title;
            this.content=content;
        }

        toString(){
            let result=`Post: ${this.title}\n`
            result+=`Content: ${this.content}\n`;
            return result;
        }


    }

    class SocialMediaPost extends Post{
        constructor(title,content,likes,dislikes){
            super(title,content);
            this.likes=likes;
            this.dislikes=dislikes;
        }
        comments=[];
        addComment(comment){
            this.comments.push(comment);
        }
        toString(){
            let result=String(super.toString());
            let rating=this.likes-this.dislikes;
            result+=`Rating: ${rating}`;

            if(this.comments.length===0){
                return result;
            }
                result+=`\nComments:\n`;
            
           
            for(let comment of this.comments){
                result+=` * ${comment}\n`;
            }
            return result;
        }
    }
    class BlogPost extends Post{
        constructor(title,content,likes,dislikes,views){
            super(title,content);
            this.likes=likes;
            this.dislikes=dislikes;
            this.views=views;
        }

        views(){
            this.views++;
            return this;
        }
        toString(){
            let result=super.toString();
            result+=`Rating: ${this.likes-this.dislikes}`;
            return result+`\nViews: ${this.views}`;
        }
    }

    return{
        Post,
        SocialMediaPost,
        BlogPost,
    }
}

const classes = solution();

let post = new classes.Post("Post", "Content");

console.log(post.toString());

let scm = new classes.SocialMediaPost("TestTitle", "TestContent", 25, 30);

scm.addComment("Good post");

scm.addComment("Very good post");

scm.addComment("Wow!");

console.log(scm.toString());

let blog=new classes.BlogPost("A","B",20,30,10000);
console.log(blog.toString());
