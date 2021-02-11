import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'linkedinUrl'
})
export class LinkedinUrlPipe implements PipeTransform {

  transform(linkedin_username: string): string {
    return `https://www.linkedin.com/in/${linkedin_username}/`;
  }

}
