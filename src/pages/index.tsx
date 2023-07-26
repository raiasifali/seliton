import Layout from '@/components/layout'
import Header from '@/components/header/header'
export default function IndexPage() {
  return (
    <Layout title="Seliton">
      <main>
        <div class="grid grid-cols-12">
          <div class="border border-sky-500 bg-gray-100 col-span-2">
            <p class="mt-1.5 text-sm text-gray-500">
              Left sidebar 🚀
            </p>
          </div>

          <div class="col-span-10 bg-gray-100">
            <Header />
          </div>
        </div>
      </main>
    </Layout>
  )
}
