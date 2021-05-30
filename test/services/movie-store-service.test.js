import MovieStoreService from '../../app/services/movie-store-service';

describe('MovieStoreService', () => {

        const movieStoreService = new MovieStoreService();

        it('Service methods:', async () => {
            expect(await movieStoreService.getMovies()).toEqual(movieStoreService.data);
            expect(await movieStoreService.updateMovieData({})).toEqual("OK");
            expect(await movieStoreService.removeMovie({})).toEqual("OK");
            expect(await movieStoreService.addMovie({})).toEqual("OK");
        });
        
})