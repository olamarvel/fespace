import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ICONS } from '.'

export function Comments({
  user,
  comments,
  comment,
  setComment,
  addComment,
  addingComment,
  slug,
  drop,
  dropComment,
}) {
  const commentMap = (item, i) => (
    <div
      className="flex gap-2 mt-5 items-center bg-white rounded-lg"
      key={'' + item.comment + i + item.postedBy?.userName}
    >
      <img
        src={item.postedBy?.image}
        className="w-10 h-10 rounded-full cursor-pointer"
        referrerPolicy={'no-referrer'}
        alt="user-profile"
      />
      <div className="flex flex-col">
        <p className="font-bold text-sm">{item.postedBy?.userName}</p>
        <p>{item.comment}</p>
      </div>
    </div>
  )
  return (
    <>
      {!!user ? (
        <>
          <div className="flex flex-wrap mt-6 gap-3">
            <img
              src={user.picture}
              className="w-10 h-10 rounded-full cursor-pointer"
              referrerPolicy={'no-referrer'}
              alt="user-profile"
            />

            <input
              className=" flex-1 border-gray-100 outline-none border-2 p-2 rounded-2xl focus:border-gray-300"
              type="text"
              placeholder="Add a comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <button
              type="button"
              className="btn text-white font-semibold text-base "
              onClick={addComment}
            >
              {addingComment ? 'commenting...' : 'comment'}
            </button>
          </div>
        </>
      ) : (
        <span>
          kindly <Link to={`/login?redirect=post/${slug.current}`}>login</Link>{' '}
          to post comments
        </span>
      )}

      {!!comments?.length ? (
        <>
          {' '}
          <div className=" relative scroll-hide">
            {!drop
              ? comments?.slice(0, 3)?.map(commentMap)
              : comments?.map(commentMap)}
            
          </div>
          {!drop && comments?.length > 3 && (
              <div
                className=" group bg-gradient-to-t from-white flex flex-col justify-center items-center cursor-pointer hover:from-transparent -mt-8 z-10 relative"
                onClick={dropComment}
              >
                <span className='text-xl capitalize '>view more</span>
                <FontAwesomeIcon
                  icon={ICONS.faChevronLeft}
                  className="-rotate-90 w-5 h-5 p-2 group-hover:shadow-card group-hover:rounded-[100%] "
                />
              </div>
            )}
        </>
      ) : (
        <span>
          No comment found ,be the first to comment{' '}
          {!!user && (
            <>
              {' '}
              by{' '}
              <Link to={`/login?redirect=post/${slug.current}`}>login-in</Link>
            </>
          )}
        </span>
      )}
    </>
  )
}
