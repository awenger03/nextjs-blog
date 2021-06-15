import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>

Voluptatem itaque sapiente aspernatur ab autem et id reprehenderit. Velit voluptatem laborum quam qui laboriosam fugit sit nobis. Vero sunt laudantium id tempora. Ut laborum explicabo consequatur dolore placeat explicabo.

Tenetur natus expedita occaecati nulla possimus magni. Facilis hic architecto esse officiis reiciendis veniam facere. Sit ducimus quia magni. Magni ut fugit et omnis nobis labore ratione nisi. Et neque esse similique iste recusandae accusamus et. Cupiditate dolores dolor ipsa tempore ducimus incidunt ut.

Tempora a asperiores sunt aut quia et. Sit quibusdam fugit rem. Adipisci eos totam et et illo.

Veniam et pariatur praesentium eum et repellendus. Consequatur iure fuga odit deserunt. Et aut amet ea occaecati mollitia distinctio. Tempora natus officia perferendis. Maxime dolorum voluptatum ut.

Ut quia saepe nam et. Fugiat temporibus delectus nobis nostrum enim hic nihil error. Quasi magni ab aut. Dignissimos optio maxime autem nam officiis.
</p>
        <p>
          (This is a sample website - you’ll be building a site like this in{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
