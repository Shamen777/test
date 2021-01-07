import React, {useEffect} from 'react';
import {useParams} from 'react-router';
import {getCategoriesById} from '../../redux/actions/actions';
import { useDispatch, useSelector } from "react-redux";

const ProductCard = () =>{
    let { id } = useParams();
    const dispatch = useDispatch();
    const categoryId = useSelector((state) => state.getCategoriesById.data.data);
    console.log(categoryId);
    useEffect(() => {
        dispatch(getCategoriesById(id));
    }, []);
    // useLayoutEffect(() =>{
    //     console.log(document.querySelector('.blog_card_intro h3'));
    // })
    // const title = () =>{
    //     console.log(document.querySelector('.blog_card_intro'));
    // }

    return(
            <div>
                <h2>work!</h2>
            </div>
    )
}

export default ProductCard;