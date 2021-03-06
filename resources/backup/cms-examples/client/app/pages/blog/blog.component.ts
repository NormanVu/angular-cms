import { Router } from '@angular/router';
import { Component, Input, ChangeDetectionStrategy, Inject } from '@angular/core';
import { Http, Response, URLSearchParams, RequestOptions, Headers } from '@angular/http';

import { CmsComponent } from '@angular-cms/core';
import { Blog } from './blog.pagetype';

@Component({
    template: `
    <div id="about">
        <div class="header">
            <div class="footer">
                <div class="body">
                    <h2>{{currentContent.title}}</h2>
                    <div [innerHTML] ="currentContent.summary"></div>
                </div>
            </div>
        </div>
    </div>
  `
})
export class BlogComponent extends CmsComponent<Blog> {

    constructor(@Inject(Router) private router: Router) {
        super();
    }

    test() {
        this.router.navigate(["/new-page-12/new-page-1"]);
    }
}