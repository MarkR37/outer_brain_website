import React from "react"
export class TopLinks extends React.Component {
  render() {
    return (
      <div>
        <div className="link-container">
          <a className="link-button" href="#home-link">
            HOME
          </a>
          <a className="link-button" href="#guilt-link">
            GUILT
          </a>
          <a className="link-button" href="#organ-link">
            ORGAN QUARTER
          </a>
          <a className="link-button" href="#team-link">
            TEAM
          </a>
        </div>
        <section className="right-side-links">
          <a
            className="steam-link"
            href="https://store.steampowered.com/search/?developer=Outer%20Brain%20Studios"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-steam-square" />
          </a>
          <a
            className="facebook-link"
            href="https://www.facebook.com/outerbrain/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-facebook-square" />
          </a>
        </section>
      </div>
    )
  }
}
