import React from 'react'
import html from '../../image/icon1.png'
import css from '../../image/icon2.png'
import js from '../../image/icon3.png'
import react from '../../image/icon4.png'
import node from '../../image/icon5.png'
import bs from '../../image/bootstrap.jpg'
import git from '../../image/git.png'
import less from '../../image/less.jpg'
import sass from '../../image/scss.png'
import ts from '../../image/ts.png'
import redux from '../../image/redux.png'


export default function Skills () {






  return (
    <>
      <div id='skills' className='skills'>
        <div className='container'>
          <div className='title'>
            <h1>Skills & Experiences</h1>
          </div>
          <div className='content'>
            <div className='left'>
              <div className='flex'>
                <div className='skill-list'>
                  <div>
                    <img src={node} alt="" width={75} height={75} />
                  </div>
                  <p>NodeJS</p>
                </div>
                <div className='skill-list'>
                  <div>
                    <img src={less} alt="" width={75} height={75} />
                  </div>
                  <p>less</p>
                </div>
                <div className='skill-list'>
                  <div>
                    <img src={git} alt="" width={75} height={75} />
                  </div>
                  <p>git</p>
                </div>
                <div className='skill-list'>
                  <div>
                    <img src={bs} alt="" width={75} height={75} />
                  </div>
                  <p>bootstrap5</p>
                </div>
                <div className='skill-list'>
                  <div>
                    <img src={html} alt="" width={75} height={75} />
                  </div>
                  <p>HTML</p>
                </div>
                <div className='skill-list'>
                  <div>
                    <img src={css} alt="" width={75} height={75} />
                  </div>
                  <p>CSS</p>
                </div>
                <div className='skill-list'>
                  <div>
                    <img src={js} alt="" width={75} height={75} />
                  </div>
                  <p>JavaScript</p>
                </div>
                <div className='skill-list'>
                  <div>
                    <img src={sass} alt="" width={75} height={75} />
                  </div>
                  <p>Sass</p>
                </div>
                <div className='skill-list'>
                  <div>
                    <img src={ts} alt="" width={75} height={75} />
                  </div>
                  <p>Typescript</p>
                </div>
                <div className='skill-list'>
                  <div>
                    <img src={redux} alt="" width={75} height={75} />
                  </div>
                  <p>Redux</p>
                </div>
                <div className='skill-list'>
                  <div>
                    <img src={react} alt="" width={75} height={75} />
                  </div>
                  <p>React</p>
                </div>
              </div>
            </div>
            <div className='right'>
              <div className='flex'>
                <div className='exp'>
                  <h4 className='current'>2024-Current</h4>
                  <div>
                    <h3>Operations Supervisor</h3>
                    <p>Longstar Healthpro Inc</p>
                  </div>
                </div>
                <div className='exp'>
                  <h4>2022-2023</h4>
                  <div>
                    <h3>Dispatch</h3>
                    <p>W&L Logistics Inc</p>
                  </div>
                </div>
                <div className='exp'>
                  <h4>2018-2022</h4>
                  <div>
                    <h3>Financial Officer</h3>
                    <p>Maxwell International Corporation</p>
                  </div>
                </div>
                <div className='exp'>
                  <h4>2016-2017</h4>
                  <div>
                    <h3>Sales Assistant Manager</h3>
                    <p>TS Metal Packaging</p>
                  </div>
                </div>
                <div className='exp'>
                  <h4>2015-2016</h4>
                  <div>
                    <h3>Office Assistant</h3>
                    <p>Star Couture</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>







      </div>
    </>
  )
}
