import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { get_posts } from '../Redux/Action/UserAction'

const ReduxSample = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(get_posts())
    }, [])
    const getAllPosts = useSelector((state) => state.getAllPosts)
    const { loading, posts, error } = getAllPosts
console.log(posts)
    return (
        <>
            {loading ?
                <div>loading.....</div>
                :
                <>
                    {posts && posts.map((po, ind) => (
                        <div>
                            <p>{po.email}</p>
                            <p>{po.password}</p>
                            <p>{po.provider}</p>
                        </div>
                    ))}
                </>
            }
        </>
    )
}

export default ReduxSample