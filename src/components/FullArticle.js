import { Fragment, useContext, useState, useEffect } from 'react'
import ArticleContext from '../context/article/articleContext';

import { Dialog, Transition } from '@headlessui/react'

import { ReactComponent as Love } from '../graphics/heart.svg';

export default function FullArticle({ openDetails, setOpenDetails }) {
    const articleContext = useContext(ArticleContext);

    const [clicked, setClicked] = useState(false);
    const [liked, setLiked] = useState(false);

    const {
        id,
        title,
        url,
        imageUrl,
        newsSite,
        summary,
    } = articleContext.articleToShow;

    const handleLike = () => {
        setClicked(true);
        setTimeout(() => {
            setClicked(false)
        }, 450);

        liked ? articleContext.removeFromFavourites(id) : articleContext.addToFavourites(id);
    }

    useEffect(() => {
        setLiked(articleContext.favourites.find(article => article.id === id))

    }, [articleContext.favourites, id])

    return (
        <Transition appear show={openDetails} as={Fragment}>
            <Dialog
                as="div"
                className="fixed inset-0 z-10 overflow-y-auto"
                onClose={() => setOpenDetails(false)}
            >
                <div className="min-h-screen px-4 text-center">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="fixed inset-0" />
                    </Transition.Child>

                    {/* This element is to trick the browser into centering the modal contents. */}
                    <span
                        className="inline-block h-screen align-middle"
                        aria-hidden="true"
                    >
                        &#8203;
                    </span>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <div className="border border-white inline-block w-full max-w-lg p-6 my-8 overflow-hidden text-left align-middle transition-all transform shadow-xl backdrop-filter backdrop-blur-2xl shadow-lg rounded-2xl">
                            <div className="flex flex-col md:flex-row">
                                <img className="rounded-xl w-48" src={imageUrl} alt="" />
                                <div className="flex flex-col justify-between md:pl-4">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900"
                                    >
                                        {title}
                                    </Dialog.Title>
                                    <span className="hidden md:inline text-sm">Source: {newsSite}</span>
                                </div>
                            </div>
                            <div className="mt-4">
                                <p className="text-md">
                                    {summary}
                                </p>
                            </div>
                            <div className="mt-4">
                                <p className="text-sm">
                                    <a href={url}>{url}</a>
                                </p>
                            </div>

                            <div className="flex items-end justify-between mt-4">
                                <button
                                    type="button"
                                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                                    onClick={() => setOpenDetails(false)}
                                >
                                    Got it, thanks!
                                </button>
                                <button
                                    type="button"
                                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                                    onClick={handleLike}
                                >
                                    <Love className={`${clicked && 'animate-pulse'} h-6 fill-current stroke-current ${liked ? 'text-red-500' : 'text-purple-600'}`} />
                                </button>
                            </div>
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition>
    )
}