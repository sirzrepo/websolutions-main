
import React from 'react';

const DashboardSection: React.FC = () => {
  return (
    <section className="py-24 bg-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Run your business <br/>from one dashboard</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-lg mb-2">Payments</h3>
                <p className="text-slate-600 text-sm">Accept payments, send invoices and track it all with ease.</p>
              </div>
              <h3 className="font-bold text-slate-400 text-lg">CRM solution</h3>
              <h3 className="font-bold text-slate-400 text-lg">Custom automations</h3>
              <h3 className="font-bold text-slate-400 text-lg">Data & analytics</h3>
              <h3 className="font-bold text-slate-400 text-lg">Mobile app</h3>
              <button className="mt-4 bg-slate-900 text-white px-8 py-3 rounded-full font-bold text-sm">Get Started</button>
            </div>
          </div>
          <div className="flex-1">
            <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 p-8">
               <div className="flex items-center justify-between mb-8">
                 <h4 className="font-bold">Payments</h4>
                 <span className="text-xs font-bold text-blue-600">This Month</span>
               </div>
               <table className="w-full text-xs">
                 <thead>
                   <tr className="text-slate-400 border-b">
                     <th className="text-left pb-4 uppercase tracking-wider">Date</th>
                     <th className="text-left pb-4 uppercase tracking-wider">Customer</th>
                     <th className="text-left pb-4 uppercase tracking-wider">Amount</th>
                     <th className="text-right pb-4 uppercase tracking-wider">Status</th>
                   </tr>
                 </thead>
                 <tbody className="divide-y">
                   <tr className="hover:bg-slate-50">
                     <td className="py-4">Oct 24</td>
                     <td className="py-4 font-bold">Lina Moore</td>
                     <td className="py-4 font-bold">$230.00</td>
                     <td className="py-4 text-right"><span className="bg-green-100 text-green-700 px-2 py-1 rounded-md font-bold text-[10px]">Paid</span></td>
                   </tr>
                   <tr className="hover:bg-slate-50">
                     <td className="py-4">Oct 22</td>
                     <td className="py-4 font-bold">Tom Hills</td>
                     <td className="py-4 font-bold">$45.00</td>
                     <td className="py-4 text-right"><span className="bg-green-100 text-green-700 px-2 py-1 rounded-md font-bold text-[10px]">Paid</span></td>
                   </tr>
                   <tr className="hover:bg-slate-50">
                     <td className="py-4">Oct 21</td>
                     <td className="py-4 font-bold">Sarah Jen</td>
                     <td className="py-4 font-bold">$1,200.00</td>
                     <td className="py-4 text-right"><span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-md font-bold text-[10px]">Pending</span></td>
                   </tr>
                 </tbody>
               </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardSection;
