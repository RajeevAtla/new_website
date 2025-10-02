use dioxus::prelude::*;

const FAVICON: Asset = asset!("/assets/favicon.ico");
const MAIN_CSS: Asset = asset!("/assets/main.css");
const HEADER_SVG: Asset = asset!("/assets/header.svg");
const TAILWIND_CSS: Asset = asset!("/assets/tailwind.css");
const FONT_AWESOME_CDN: &str = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css";

fn main() {
    dioxus::launch(App);
}

#[component]
fn App() -> Element {
    rsx! {
        document::Link { rel: "icon", href: FAVICON }
        document::Link { rel: "stylesheet", href: MAIN_CSS }
        document::Link { rel: "stylesheet", href: TAILWIND_CSS }
        document::Link { rel: "stylesheet", href: FONT_AWESOME_CDN }
        Hero {}
    }
}

#[component]
pub fn Hero() -> Element {
    rsx! {
        div {
            id: "hero",
            img { src: HEADER_SVG, id: "header" }
            div { id: "links",
                a {
                    href: "https://github.com/RajeevAtla",
                    i { class: "fa-brands fa-github" }
                    span { "GitHub" }
                }
                a {
                    href: "https://linkedin.com/in/rajeev-atla/",
                    i { class: "fa-brands fa-linkedin" }
                    span { "LinkedIn" }
                }
                a {
                    href: "https://rajeevatla.github.io/resume/resume.pdf",
                    i { class: "fa-solid fa-file-lines" }
                    span { "Resume" }
                }
            }
        }
    }
}
