import axios from "axios";
import MovieCard from "../../components/MovieCard";
import Pagination from "../../components/Pagination";
import { BASE_URL } from "../../utils/requests";
import { useEffect, useState } from "react";
import type { MoviePage } from "../../types/movie";

export default function Listing() {

    const [pageNumber, setPageNumber] = useState(0);

    const [page, setPage] = useState<MoviePage>({
        content: [],
        currentPage: 0,
        totalPages: 0,
        totalElements: 0
    })

    useEffect(() => {
        axios.get(`${BASE_URL}/movies?size=12&page=${pageNumber}&sort=title`)
            .then(response => {
                const data = response.data as MoviePage;
                setPage(data);
            });
    }, [pageNumber]);

    return (
        <>
            <Pagination />
            <div className="container">
                <div className="row">

                    {page.content.map(movie => (
                        (
                            <div key={movie.id} className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                                <MovieCard movie={movie} />
                            </div>
                        )
                    ))}

                </div>
            </div>
        </>

    );
}