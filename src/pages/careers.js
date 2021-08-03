import React from "react"
import { Link } from "gatsby"
import { Trans } from "gatsby-plugin-react-i18next"

import SEO from "components/utilities/seo"
import Background from "components/layouts/background"
import Section from "components/layouts/section"

import careers from "images/backgrounds/careers.jpg"
import passion from "images/careers/passion.jpg"
import mission from "images/careers/mission.jpg"
import multicultural from "images/careers/multicultural.jpg"
import team from "images/careers/team.jpg"

const CareersPage = () => {
  return (
    <>
      <SEO title="Carees" />

      <Background image={careers} opacity="4" scroll>
        <div className="row py-5 text-center">
          <div className="col-12">
            <h1 className="text-12">
              <Trans>Zip Up Your Career</Trans>
            </h1>

            <p className="text-6 line-hight-4">
              <Trans>
                With the aid of cutting-edge technologies and our highly qualified professional team, we build hi-tech services that allow our customers to send money and airtime fast, instant and using low cost. We're still growing, and our people are key in helping us shape our future. Why not join us?
              </Trans>
            </p>

            <a href="#opportunities" className="btn btn-secondary">
              <Trans>See All Our Roles</Trans>
            </a>
          </div>
        </div>
      </Background>

      <Section>
        <div className="row text-center">
          <div className="col-12">
            <h5 className="text-uppercase text-9">
              <Trans>Our People</Trans>
            </h5>

            <p className="text-5">
              ZIPREMIT <Trans>is home to problem solvers &amp; creative thinkers</Trans>
            </p>
          </div>
        </div>

        <div className="row align-items-center my-5">
          <div className="col-lg-6">
            <p className="text-4">
              <Trans>
                We're passionate about spreading the joy of impacting lives through providing community and low cost money transfer and airtime connection, and if you're all about meaningful impact, we'd love your help.
              </Trans>
            </p>
          </div>

          <div className="col-lg-6">
            <img src={passion} className="img-fluid shadow-sm rounded-lg" alt="" />
          </div>
        </div>

        <div className="row align-items-center my-5">
          <div className="col-lg-6">
            <img src={mission} className="img-fluid shadow-sm rounded-lg" alt="" />
          </div>
          
          <div className="col-lg-6">
            <p className="text-4">
              <Trans>
                We’re on a global mission to make send money and airtime top-up accessible and affordable to diaspora communities. It’s an action packed adventure that involves rolling up your sleeves and getting stuck in every day.
              </Trans>
            </p>
          </div>
        </div>

        <div className="row text-center mb-4">
          <div className="col-12 mt-5">
            <q className="text-6 font-weight-bold">
              <Trans>I love the multicultural environment.</Trans>
            </q>

            <p className="text-4 mt-3">
              <Trans>
                We are a team and Yes we ZIP money and airtime to family fast and instant
              </Trans>
            </p> 
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <img src={multicultural} className="img-fluid shadow-sm rounded-lg" alt="" />     
          </div>

          <div className="col-lg-6 mt-5 mt-lg-0">
            <img src={team} className="img-fluid shadow-sm rounded-lg" alt="" />
          </div>
        </div>

        <div className="row text-center mt-5">
          <div className="col-12">
            <q className="text-6 font-weight-bold">
              <Trans>At ZIPREMIT no two days are the same...</Trans>
            </q>
          </div>
        </div>
      </Section>

      <Section className="bg-white" id="opportunities">
        <div className="row">
          <div className="col-12">
            <div className="section-heading text-center">
              <h2 className="section-title">
                <Trans>Our Opportunities</Trans>
              </h2>
            </div>

            <div className="card">
              <div className="card-body">
                <div className="d-flex align-items-center">
                  <div>
                    <h6 className="text-3 mb-1">
                      <Trans>
                      Regional Sales Representatives (RSR)
                      </Trans>
                    </h6>

                    <p className="text-3 mb-0">
                      <Trans>
                      All markets for Airtime topup
                      </Trans>
                    </p>

                    <p className="text-3 mb-0">
                      <Trans>
                      Send money to Africa, Nepal, UAE, India
                      </Trans>
                    </p>
                  </div>

                  <span style={{flex: "1 1 auto"}}></span>

                  <Link to="/careers/regional-sales-representatives">
                    Apply
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}

export default CareersPage
