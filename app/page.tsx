// app/page.tsx
import Nav from '../component/nav';

export default function Home() {
  return (
    <div>
      <Nav />
      <div style={{ paddingTop: '60px' }}> {/* Add space below navbar */}
        <h1>Welcome to Desha E-Mart</h1>
        <p>Shop for mobile phones and laptops or track your repair status!</p>
      </div>
    </div>
  );
}
