import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'twitterUrl'
})
export class TwitterUrlPipe implements PipeTransform {

  transform(twitter_user: string): string {
    return `https://twitter.com/${twitter_user}`;
  }

}
