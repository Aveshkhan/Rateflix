import { Component, ElementRef, ViewChild } from '@angular/core';
import { ImdbApiService } from 'src/app/services/imdb-api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  @ViewChild('mostPopularMovieContent', { read: ElementRef }) public mostPopularMovieContent!: ElementRef<any>;
  @ViewChild('mostPopularTVsContent', { read: ElementRef }) public mostPopularTVsContent!: ElementRef<any>;
  @ViewChild('comingSoonContent', { read: ElementRef }) public comingSoonContent!: ElementRef<any>;

  mostPopularMovies: any = []
  mostPopularTVs: any = []
  comingSoon: any = []

  constructor(
    private imdbService: ImdbApiService
  ) { }

  ngOnInit(): void {
    this.getMostPopularMovies();
    this.getMostPopularTvSeries();
    this.getComingSoons();
  }

  public swipeRight(value: any): void {
    console.log(value)
    if (value === "mostPopularMovieContent") {
      this.mostPopularMovieContent.nativeElement.scrollTo({ left: (this.mostPopularMovieContent.nativeElement.scrollLeft + 1000), behavior: 'smooth' })
    } else if (value === "mostPopularTVsContent") {
      this.mostPopularTVsContent.nativeElement.scrollTo({ left: (this.mostPopularTVsContent.nativeElement.scrollLeft + 1000), behavior: 'smooth' })
    } else if (value === "comingSoonContent") {
      this.comingSoonContent.nativeElement.scrollTo({ left: (this.comingSoonContent.nativeElement.scrollLeft + 1000), behavior: 'smooth' })
    }
  }

  public swipeLeft(value: any): void {
    console.log(value)
    if (value === "mostPopularMovieContent") {
      this.mostPopularMovieContent.nativeElement.scrollTo({ left: (this.mostPopularMovieContent.nativeElement.scrollLeft - 1000), behavior: 'smooth' })
    } else if (value === "mostPopularTVsContent") {
      this.mostPopularTVsContent.nativeElement.scrollTo({ left: (this.mostPopularTVsContent.nativeElement.scrollLeft - 1000), behavior: 'smooth' })
    } else if (value === "comingSoonContent") {
      this.comingSoonContent.nativeElement.scrollTo({ left: (this.comingSoonContent.nativeElement.scrollLeft - 1000), behavior: 'smooth' })
    }
  }


  getMostPopularMovies() {
    this.imdbService.getMostPopularMovies().subscribe((response) => {
      console.log('MostPopularMovies===>' + response)
      this.mostPopularMovies = response.items
      console.log(this.mostPopularMovies)
    }, (error) => {
      console.log("Error while calling getMostPopularMovies" + error)
    })
  }

  getMostPopularTvSeries() {
    this.imdbService.getMostPopularTVs().subscribe((response) => {
      this.mostPopularTVs = response.items
      console.log('MostPopularTVs===>' + response)
    }, (error) => {
      console.log("Error while calling getMostPopularMovies" + error)
    })
  }

  getComingSoons() {
    this.imdbService.getComingSoon().subscribe((response) => {
      console.log('ComingSoon===>' + response)
      this.comingSoon = response.items
    }, (error) => {
      console.log("Error while calling getMostPopularMovies" + error)
    })
  }
}
