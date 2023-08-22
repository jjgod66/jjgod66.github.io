$(document).ready(function(){

    let render_projects = (slug) => {
        let projects_area = $('.projects-wrapper');

        $('.white-button').removeClass('white-button-hover');
        $(`#${slug}`).addClass('white-button-hover');

        let projects_obj = [
            {
                image: '../assets/images/projects/dw-final.PNG',
                link: 'https://github.com/jjgod66/dw-final-group2',
                title: 'DWAcademy',
                // demo: 'http://wall-e-jekyll.github.io/',
                technologies: ['SPRING', 'Mybatis', 'JSP', 'Oracle DB'],
                description: "현재 상영중인 영화 및 개봉 예정작들을 살펴볼 수 있고, 사용자는 원하는 영화를 예매할 수 있는 영화 예매 플랫폼 ",
                categories: ['featured']
            },
            {
                image: '../assets/images/projects/dw-middle.PNG',
                link: 'https://github.com/jjgod66/project_mj',
                title: '은행나무',
                // demo: 'https://mporter.co',
                technologies: ['JAVA', 'iBatis', 'JQuery', 'Oracle DB'],
                description: "해당 지역의 로컬 맛집을 검색하고 해당 정보를 공유하는 웹 사이트 플랫폼",
                categories: ['featured']
            },
        ]

        let projects = [];
        if(slug == 'all') {
            projects = projects_obj.map(project_mapper);
        } 
        else {
            projects = projects_obj.filter(project => project.categories.includes(slug)).map(project_mapper);
        }
        projects_area.hide().html(projects).fadeIn();
    }

    let project_mapper = project => {
        return `
            <div class="wrapper">
                    
                <div class="card radius shadowDepth1">

                    ${project.image ? 
                        `<div class="card__image border-tlr-radius">
                            <a href="${project.link}">
                                <img src="${project.image}" alt="image" id="project-image" class="border-tlr-radius">
                            </a>
                        </div>`           
                    : ''}

            
                    <div class="card__content card__padding" style="min-height: 200px;">
            
                        <article class="card__article">
                            <h2><a href="${project.link}">${project.title}</a></h2>
            
                            <p class="paragraph-text-normal">${project.description} ${project.demo ? `<a href="${project.demo}">Demo</a>` : ''}</p>
                        </article>

                                    
                        <div class="card__meta">
                            ${project.technologies.map(tech =>
                                `<span class="project-technology paragraph-text-normal">${tech}</span>`
                            ).join('')}
                        </div>

                    </div>
                </div>
            </div>
        `
    }

    let selected = (slug) => {
        render_projects(slug);
    }

    render_projects('featured');
});