import { getAlbumById, getLikesByAlbumAndUserId, getLikesByBookId, likeAnAlbum } from '../api/data.js';
import {html} from '../api/lib.js';
import { getUserData } from '../api/util.js';



const detailsTemplate=(band,currentUser,owner,likes,hasLikes,onLike)=>html`
<section id="details">
        <div id="details-wrapper">
          <p id="details-title">Album Details</p>
          <div id="img-wrapper">
            <img src="${band.imageUrl}" alt="example1" />
          </div>
          <div id="info-wrapper">
            <p><strong>Band:</strong><span id="details-singer">${band.singer}</span></p>
            <p>
              <strong>Album name:</strong><span id="details-album">${band.album}</span>
            </p>
            <p><strong>Release date:</strong><span id="details-release">${band.release}</span></p>
            <p><strong>Label:</strong><span id="details-label">${band.label}</span></p>
            <p><strong>Sales:</strong><span id="details-sales">${band.sales}</span></p>
          </div>
          <div id="likes">Likes: <span id="likes-count">${likes}</span></div>

          <!--Edit and Delete are only for creator-->
          <div id="action-buttons">
            ${hasLikes==0 &&currentUser!=owner
            ?html` <a @click=${onLike} href="javascript:void(0)" id="like-btn">Like</a>`
            :html``}
          ${currentUser===owner
            ?html`
            <a href="/edit/${band._id}" id="edit-btn">Edit</a>
            <a href="/delete/${band._id}" id="delete-btn">Delete</a>`
            :html``}
            </div>
        </div>
        </div>
      </section>
`


export async function detailsView(ctx){
  const detailID=ctx.params.id;
  const currentUser=getUserData()?getUserData().id:'';
  const[book,likes,hasLikes]=await Promise.all([
    getAlbumById(detailID),
    getLikesByBookId(detailID),
    getLikesByAlbumAndUserId(detailID,currentUser)
  ])

    const album=await getAlbumById(detailID);
    console.log(likes);
    console.log(hasLikes);
    const owner=album._ownerId;
    console.log(currentUser);
    console.log(owner);
    ctx.render(detailsTemplate(album,currentUser,owner,likes,hasLikes,onLike));



    async function onLike(){
      await likeAnAlbum(detailID);
      ctx.page.redirect('/details/'+detailID);
    }
}


