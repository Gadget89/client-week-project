import React from 'react'
import Header from './header'
import Footer from './footer'



export default React.createClass({
  getInitialState() {
    return {
      posts: [
        {
          postAuthor: "Ranger",
          photoUrl: "styles/authorIcon1.png",
          postDate: "APR 21 2015",
          postTitle: "Spurs vs Rockets",
          postText: "The Spurs and the Rockets compete for the top slot of their division as the new year begins. These two teams may be heading for a Texas Showdown come late spring",
        },
        {
          postAuthor: "Crypto",
          photoUrl: "styles/authorIcon2.png",
          postDate: "MAY 11 2015",
          postTitle: "Bigfoot practices with Spurs",
          postText: "In American folklore, Bigfoot (also known as Sasquatch) is a simian-like creature[2] that is said to inhabit forests, mainly in the Pacific Northwest. Bigfoot is usually described as a large, hairy, bipedal humanoid. The term sasquatch is an Anglicized derivative of the Halkomelem word sásq'ets",
        },
        {
          postAuthor: "Different Guy",
          photoUrl: "styles/authorIcon3.png",
          postDate: "JUN 14 2015",
          postTitle: "Spurs went to the beach",
          postText: "An ocean is a body of saline water that composes much of a planet's hydrosphere.[2] On Earth, an ocean is one of the major conventional divisions of the World Ocean, which covers almost 71% of its surface.",
        },
        {
          postAuthor: "Different Guy",
          photoUrl: "styles/authorIcon3.png",
          postDate: "JUN 06 2015",
          postTitle: "Spurs Lorem SA magna",
          postText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecatm",
        },
        {
          postAuthor: "Author Name",
          photoUrl: "styles/authorIcon1.png",
          postDate: "APR 21 2015",
          postTitle: "A New Year",
          postText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        },
        {
          postAuthor: "Ranger",
          photoUrl: "styles/authorIcon1.png",
          postDate: "APR 21 2015",
          postTitle: "Spurs vs Rockets",
          postText: "The Spurs and the Rockets compete for the top slot of their division as the new year begins. These two teams may be heading for a Texas Showdown come late spring",
        },
        {
          postAuthor: "Crypto",
          photoUrl: "styles/authorIcon2.png",
          postDate: "MAY 11 2015",
          postTitle: "Bigfoot practices with Spurs",
          postText: "In American folklore, Bigfoot (also known as Sasquatch) is a simian-like creature[2] that is said to inhabit forests, mainly in the Pacific Northwest. Bigfoot is usually described as a large, hairy, bipedal humanoid. The term sasquatch is an Anglicized derivative of the Halkomelem word sásq'ets",
        },
        {
          postAuthor: "Different Guy",
          photoUrl: "styles/authorIcon3.png",
          postDate: "JUN 14 2015",
          postTitle: "Spurs went to the beach",
          postText: "An ocean is a body of saline water that composes much of a planet's hydrosphere.[2] On Earth, an ocean is one of the major conventional divisions of the World Ocean, which covers almost 71% of its surface.",
        },
        {
          postAuthor: "Different Guy",
          photoUrl: "styles/authorIcon3.png",
          postDate: "JUN 06 2015",
          postTitle: "Spurs Lorem SA magna",
          postText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecatm",
        },
        {
          postAuthor: "Author Name",
          photoUrl: "styles/authorIcon1.png",
          postDate: "APR 21 2015",
          postTitle: "A New Year",
          postText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        },  {
            postAuthor: "Ranger",
            photoUrl: "styles/authorIcon1.png",
            postDate: "APR 21 2015",
            postTitle: "Spurs vs Rockets",
            postText: "The Spurs and the Rockets compete for the top slot of their division as the new year begins. These two teams may be heading for a Texas Showdown come late spring",
          },
          {
            postAuthor: "Crypto",
            photoUrl: "styles/authorIcon2.png",
            postDate: "MAY 11 2015",
            postTitle: "Bigfoot practices with Spurs",
            postText: "In American folklore, Bigfoot (also known as Sasquatch) is a simian-like creature[2] that is said to inhabit forests, mainly in the Pacific Northwest. Bigfoot is usually described as a large, hairy, bipedal humanoid. The term sasquatch is an Anglicized derivative of the Halkomelem word sásq'ets",
          },
          {
            postAuthor: "Different Guy",
            photoUrl: "styles/authorIcon3.png",
            postDate: "JUN 14 2015",
            postTitle: "Spurs went to the beach",
            postText: "An ocean is a body of saline water that composes much of a planet's hydrosphere.[2] On Earth, an ocean is one of the major conventional divisions of the World Ocean, which covers almost 71% of its surface.",
          },
          {
            postAuthor: "Different Guy",
            photoUrl: "styles/authorIcon3.png",
            postDate: "JUN 06 2015",
            postTitle: "Spurs Lorem SA magna",
            postText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecatm",
          },
          {
            postAuthor: "Author Name",
            photoUrl: "styles/authorIcon1.png",
            postDate: "APR 21 2015",
            postTitle: "A New Year",
            postText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
          },  {
              postAuthor: "Ranger",
              photoUrl: "styles/authorIcon1.png",
              postDate: "APR 21 2015",
              postTitle: "Spurs vs Rockets",
              postText: "The Spurs and the Rockets compete for the top slot of their division as the new year begins. These two teams may be heading for a Texas Showdown come late spring",
            },
            {
              postAuthor: "Crypto",
              photoUrl: "styles/authorIcon2.png",
              postDate: "MAY 11 2015",
              postTitle: "Bigfoot practices with Spurs",
              postText: "In American folklore, Bigfoot (also known as Sasquatch) is a simian-like creature[2] that is said to inhabit forests, mainly in the Pacific Northwest. Bigfoot is usually described as a large, hairy, bipedal humanoid. The term sasquatch is an Anglicized derivative of the Halkomelem word sásq'ets",
            },
            {
              postAuthor: "Different Guy",
              photoUrl: "styles/authorIcon3.png",
              postDate: "JUN 14 2015",
              postTitle: "Spurs went to the beach",
              postText: "An ocean is a body of saline water that composes much of a planet's hydrosphere.[2] On Earth, an ocean is one of the major conventional divisions of the World Ocean, which covers almost 71% of its surface.",
            },
            {
              postAuthor: "Different Guy",
              photoUrl: "styles/authorIcon3.png",
              postDate: "JUN 06 2015",
              postTitle: "Spurs Lorem SA magna",
              postText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecatm",
            },
            {
              postAuthor: "Author Name",
              photoUrl: "styles/authorIcon1.png",
              postDate: "APR 21 2015",
              postTitle: "A New Year",
              postText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
            },  {
                postAuthor: "Ranger",
                photoUrl: "styles/authorIcon1.png",
                postDate: "APR 21 2015",
                postTitle: "Spurs vs Rockets",
                postText: "The Spurs and the Rockets compete for the top slot of their division as the new year begins. These two teams may be heading for a Texas Showdown come late spring",
              },
              {
                postAuthor: "Crypto",
                photoUrl: "styles/authorIcon2.png",
                postDate: "MAY 11 2015",
                postTitle: "Bigfoot practices with Spurs",
                postText: "In American folklore, Bigfoot (also known as Sasquatch) is a simian-like creature[2] that is said to inhabit forests, mainly in the Pacific Northwest. Bigfoot is usually described as a large, hairy, bipedal humanoid. The term sasquatch is an Anglicized derivative of the Halkomelem word sásq'ets",
              },
              {
                postAuthor: "Different Guy",
                photoUrl: "styles/authorIcon3.png",
                postDate: "JUN 14 2015",
                postTitle: "Spurs went to the beach",
                postText: "An ocean is a body of saline water that composes much of a planet's hydrosphere.[2] On Earth, an ocean is one of the major conventional divisions of the World Ocean, which covers almost 71% of its surface.",
              },
              {
                postAuthor: "Different Guy",
                photoUrl: "styles/authorIcon3.png",
                postDate: "JUN 06 2015",
                postTitle: "Spurs Lorem SA magna",
                postText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecatm",
              },
              {
                postAuthor: "Author Name",
                photoUrl: "styles/authorIcon1.png",
                postDate: "APR 21 2015",
                postTitle: "A New Year",
                postText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
              },
      ]
    }
  },
    onClickHome() {
      this.refs.listOfPost.className = "visible"
      this.refs.createPost.className = "hidden"
    },
    onClickCreate() {
      this.refs.createPost.className = "visible"
      this.refs.listOfPost.className = "hidden"
    },
    onClickPostTitle(e) {
      var selectedPostTitle = e.target.textContent
      var indexOfPostTitle = selectedPostTitle.substring(0,1) -1
      this.refs.detailsPage.className = "visible"
      this.refs.listOfPost.className = "hidden"
      this.setState({indexOfPostTitle})
      var showTitle = this.state.posts[indexOfPostTitle].postTitle
      var showText = this.state.posts[indexOfPostTitle].postText
      var showImg = this.state.posts[indexOfPostTitle].photoUrl
      this.setState({showTitle})
      this.setState({showText})
      this.setState({showImg})
    },
    onClickSubmit(e) {
      e.preventDefault()
      let titleText = this.refs.title.value
      let textPost = this.refs.textPost.value
      let imgLink = this.refs.photoURL.value
      let currentDate = Date().substring(4,16)
      var newPost= {
        postAuthor: "Name",
        photoUrl: imgLink,
        postDate: currentDate,
        postTitle: titleText,
        postText: textPost
      }
      this.state.posts.unshift(newPost)
      this.setState(this.state.posts)
      this.refs.title.value = ""
      this.refs.textPost.value = ""
      this.refs.photoURL.value = ""
      this.refs.createPost.className = "hidden"
      this.refs.listOfPost.className = "visible"

    },
  render(indexOfPostTitle) {
    return (
      <div>
        <Header />
        <section ref="listOfPost" className="visible">
          <h1 className="postHistoryTitle">List of Posts</h1>
          <ul className="listOfPost" ref="listOfPost"> {this.state.posts.map ((post,i)=>{
                     var preview = post.postText.substring(0,80)+"..."
                     return <li key={i}>
                                <a href="#" >
                                  <h1 className="postTitle" ref="postTitle" onClick={ this.onClickPostTitle }>{i+1+".   "+post.postTitle}</h1>
                                </a>
                                <p className="postDate">{"  ("+post.postDate+")"}</p>

                                <p className="previewPost">{preview}</p>
                            </li>
                      })
                   }
          </ul>
          <button className="createPostButton" onClick={ this.onClickCreate }>Create New Post</button>
        </section>
        <section className="hidden" ref="createPost">
          <div className="postAreaTitle">
            <button onClick={this.onClickHome} className="homeButton">Home</button>
            <h1 className="pageTitle">Create Your Spurs Post Here</h1>
          </div>
          <form>
            <div className="titleImgInput">
              <input ref="title" className="titlePost" placeholder="Title"></input>
              <input ref="photoURL" className="addPhoto" type="url" placeholder="Photo URL"></input>
            </div>
            <div className="textPostSection">
              <textarea ref="textPost" className="textPost" placeholder="Type something"></textarea>
           </div>
            <submit className="submitPost" onClick={ this.onClickSubmit } >SUBMIT</submit>
          </form>
        </section>
        <section className="hidden" ref="detailsPage">
          <div className="detail_post_wrapper">
         <div className="detail_post_info">
           <button className="detail_post_back_button"type="button" name="button">Back</button>
           {console.log(this.state.indexOfPostTitle)}
           <h1 className="post_info"> {this.state.showTitle} </h1>
          </div>
          <div className="detail_post_img">
            <img className="" src={this.state.showImg} alt=""></img>
          </div>
          <p className="detail_post_content"> {this.state.showText} </p>
          </div>
        </section>
       <Footer />
      </div>
    )
  }
})
