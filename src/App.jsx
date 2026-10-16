
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Navigate,
  Outlet,
} from "react-router-dom";

const currentOrders = [
  {
    id: "ORD-1001",
    product: "Wireless Headphones",
    date: "16 Oct 2026",
    amount: 2499,
    status: "Processing",
    icon: "🎧",
    color: "bg-violet-100",
  },
  {
    id: "ORD-1002",
    product: "Smart Watch",
    date: "15 Oct 2026",
    amount: 3999,
    status: "Shipped",
    icon: "⌚",
    color: "bg-blue-100",
  },
  {
    id: "ORD-1003",
    product: "Bluetooth Speaker",
    date: "14 Oct 2026",
    amount: 1799,
    status: "Out for delivery",
    icon: "🔊",
    color: "bg-orange-100",
  },
];

const orderHistory = [
  {
    id: "ORD-0981",
    product: "Laptop Backpack",
    date: "10 Oct 2026",
    amount: 1299,
    status: "Delivered",
    icon: "🎒",
    color: "bg-emerald-100",
  },
  {
    id: "ORD-0975",
    product: "USB Keyboard",
    date: "05 Oct 2026",
    amount: 899,
    status: "Delivered",
    icon: "⌨️",
    color: "bg-sky-100",
  },
];

const cancelledOrders = [
  {
    id: "ORD-0960",
    product: "Gaming Mouse",
    date: "02 Oct 2026",
    amount: 1499,
    status: "Cancelled",
    icon: "🖱️",
    color: "bg-rose-100",
  },
];

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <NavLink to="/" className="text-2xl font-extrabold tracking-tight text-slate-900">
          Shop<span className="text-indigo-600">Ease</span>
        </NavLink>

        <nav className="flex items-center gap-5 text-sm font-semibold sm:gap-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-indigo-600"
                : "text-slate-600 transition hover:text-indigo-600"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/orders"
            className={({ isActive }) =>
              isActive
                ? "text-indigo-600"
                : "text-slate-600 transition hover:text-indigo-600"
            }
          >
            My Orders
          </NavLink>
        </nav>

        <div className="flex items-center gap-2">
          <div className="grid h-10 w-10 place-items-center rounded-full bg-indigo-100 font-bold text-indigo-700">
            JD
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-bold text-slate-800">John Doe</p>
            <p className="text-xs text-slate-500">Customer</p>
          </div>
        </div>
      </div>
    </header>
  );
}

function Home() {
  return (
    <section className="mx-auto my-10 max-w-4xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-200/50 sm:my-16">
      <div className="bg-gradient-to-br from-indigo-600 via-indigo-700 to-violet-800 px-6 py-14 text-center text-white sm:px-12 sm:py-20">
        <div className="mx-auto mb-6 grid h-20 w-20 place-items-center rounded-2xl bg-white/15 text-4xl shadow-lg ring-1 ring-white/20">
          🛍️
        </div>

        <p className="mb-3 text-xs font-bold tracking-[0.25em] text-indigo-200">
          WELCOME TO SHOEASE
        </p>

        <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl">
          Your orders, all in one place.
        </h1>

        <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-indigo-100 sm:text-base">
          Track your current deliveries, revisit previous purchases,
          and view cancelled orders from one simple dashboard.
        </p>

        <NavLink
          to="/orders"
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-bold text-indigo-700 shadow-lg transition hover:-translate-y-1 hover:bg-indigo-50"
        >
          Manage My Orders <span>→</span>
        </NavLink>
      </div>

      <div className="grid gap-4 p-6 sm:grid-cols-3 sm:p-8">
        <FeatureCard icon="📦" title="Current Orders" description="Track ongoing deliveries." />
        <FeatureCard icon="🧾" title="Order History" description="View completed purchases." />
        <FeatureCard icon="↩️" title="Cancelled Orders" description="Review cancelled purchases." />
      </div>
    </section>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:border-indigo-200 hover:bg-indigo-50">
      <div className="mb-3 text-2xl">{icon}</div>
      <h3 className="font-bold text-slate-800">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-500">{description}</p>
    </div>
  );
}

function OrdersLayout() {
  return (
    <section className="space-y-7">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="text-xs font-extrabold tracking-[0.2em] text-indigo-600">
            YOUR ACCOUNT
          </p>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Order Management
          </h1>
          <p className="mt-2 text-sm text-slate-500 sm:text-base">
            View and manage all your purchases.
          </p>
        </div>

        <div className="inline-flex w-fit items-center gap-2 rounded-xl border border-indigo-100 bg-indigo-50 px-4 py-3 text-sm font-bold text-indigo-700">
          📦 <span>My Orders</span>
        </div>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-2 shadow-sm">
        <nav className="grid grid-cols-1 gap-2 sm:grid-cols-3">
          <OrderTab to="current">📦 Current Orders</OrderTab>
          <OrderTab to="history">🧾 Order History</OrderTab>
          <OrderTab to="cancelled">↩️ Cancelled Orders</OrderTab>
        </nav>
      </div>

      <div className="min-w-0 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-7">
        <Outlet />
      </div>
    </section>
  );
}

function OrderTab({ to, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex min-h-12 items-center justify-center rounded-xl px-3 py-3 text-center text-sm font-bold transition ${
          isActive
            ? "bg-indigo-600 text-white shadow-md shadow-indigo-200"
            : "text-slate-600 hover:bg-indigo-50 hover:text-indigo-700"
        }`
      }
    >
      {children}
    </NavLink>
  );
}

function OrderList({ title, description, orders }) {
  return (
    <section>
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-xl font-extrabold text-slate-900 sm:text-2xl">
            {title}
          </h2>
          <p className="mt-1 text-sm leading-6 text-slate-500">
            {description}
          </p>
        </div>

        <span className="rounded-full bg-slate-100 px-3 py-2 text-xs font-bold text-slate-600">
          {orders.length} {orders.length === 1 ? "order" : "orders"}
        </span>
      </div>

      {orders.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-5 py-14 text-center">
          <div className="text-4xl">📭</div>
          <h3 className="mt-4 font-bold text-slate-800">No orders found</h3>
          <p className="mt-2 text-sm text-slate-500">
            There are no orders in this section yet.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {orders.map((order) => (
            <article
              key={order.id}
              className="flex flex-col gap-4 rounded-2xl border border-slate-200 p-4 transition hover:border-indigo-200 hover:shadow-md sm:flex-row sm:items-center sm:p-5"
            >
              <div
                className={`grid h-14 w-14 shrink-0 place-items-center rounded-2xl text-2xl ${order.color}`}
              >
                {order.icon}
              </div>

              <div className="min-w-0 flex-1">
                <h3 className="font-bold text-slate-900">
                  {order.product}
                </h3>

                <p className="mt-1 text-xs font-bold text-indigo-600">
                  {order.id}
                </p>

                <p className="mt-2 text-xs text-slate-500">
                  Ordered on {order.date}
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-3 sm:flex-col sm:items-end sm:border-0 sm:pt-0">
                <p className="text-lg font-extrabold text-slate-900">
                  ₹{order.amount.toLocaleString("en-IN")}
                </p>

                <StatusBadge status={order.status} />
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

function StatusBadge({ status }) {
  const styles = {
    Processing: "bg-amber-100 text-amber-800",
    Shipped: "bg-blue-100 text-blue-800",
    "Out for delivery": "bg-violet-100 text-violet-800",
    Delivered: "bg-emerald-100 text-emerald-800",
    Cancelled: "bg-rose-100 text-rose-800",
  };

  return (
    <span
      className={`inline-flex rounded-full px-3 py-1.5 text-xs font-bold ${
        styles[status] || "bg-slate-100 text-slate-700"
      }`}
    >
      {status}
    </span>
  );
}

function CurrentOrders() {
  return (
    <OrderList
      title="Current Orders"
      description="Track your ongoing orders and deliveries."
      orders={currentOrders}
    />
  );
}

function OrderHistory() {
  return (
    <OrderList
      title="Order History"
      description="Your previously completed purchases."
      orders={orderHistory}
    />
  );
}

function CancelledOrders() {
  return (
    <OrderList
      title="Cancelled Orders"
      description="Orders that were cancelled."
      orders={cancelledOrders}
    />
  );
}

function NotFound() {
  return (
    <section className="mx-auto max-w-xl rounded-3xl border border-slate-200 bg-white px-6 py-16 text-center shadow-sm">
      <div className="text-5xl">🔎</div>
      <h1 className="mt-5 text-3xl font-extrabold text-slate-900">
        Page not found
      </h1>
      <p className="mt-3 text-slate-500">
        The page you are looking for does not exist.
      </p>
      <NavLink
        to="/"
        className="mt-7 inline-flex rounded-xl bg-indigo-600 px-6 py-3 font-bold text-white transition hover:bg-indigo-700"
      >
        Back to Home
      </NavLink>
    </section>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen flex-col bg-slate-50 font-sans text-slate-900">
        <Navbar />

        <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/orders" element={<OrdersLayout />}>
              <Route
                index
                element={<Navigate to="current" replace />}
              />
              <Route path="current" element={<CurrentOrders />} />
              <Route path="history" element={<OrderHistory />} />
              <Route path="cancelled" element={<CancelledOrders />} />
            </Route>

            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <footer className="border-t border-slate-200 bg-white px-4 py-5 text-center text-xs text-slate-500">
          © 2026 ShopEase · E-commerce Order Management
        </footer>
      </div>
    </BrowserRouter>
  );
}
