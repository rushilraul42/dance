const Events = () => {
  const events = [
    {
      date: { month: 'MAR', day: '15' },
      title: 'Master Class Workshop',
      description: 'Advanced contemporary techniques with guest instructor Sarah Chen',
      time: '2:00 PM - 4:00 PM',
      location: 'Studio A',
      action: 'Register Now',
      actionType: 'primary'
    },
    {
      date: { month: 'APR', day: '02' },
      title: 'Student Showcase Auditions',
      description: 'Auditions for our annual student showcase performance',
      time: '10:00 AM - 6:00 PM',
      location: 'Main Studio',
      action: 'Learn More',
      actionType: 'secondary'
    },
    {
      date: { month: 'APR', day: '20' },
      title: 'Community Dance Festival',
      description: 'Join local dancers for a celebration of movement and music',
      time: '1:00 PM - 8:00 PM',
      location: 'City Park Amphitheater',
      action: 'Join Event',
      actionType: 'primary'
    }
  ];

  return (
    <section style={{ background: '#4A7766', color: '#ECE7E2' }} className="py-20">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <div className="text-5xl mb-4" style={{ color: '#ECE7E2' }}>4c5</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 highlight" style={{ color: '#ECE7E2' }}>Upcoming Events</h2>
          <p className="text-xl mb-6 leading-relaxed" style={{ color: '#ECE7E2' }}>
            Join us for these exciting upcoming opportunities
          </p>
          <div className="w-24 h-1 mx-auto rounded-full" style={{ background: '#ECE7E2' }}></div>
        </div>

        <div className="flex flex-col gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 p-8 md:p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border hover:border-[#C59C79]/50 card-hover stagger-item"
              style={{ animationDelay: `${index * 0.2}s`, background: '#4A7766', borderColor: '#ECE7E2' }}
            >
              {/* Date */}
              <div className="px-6 py-4 rounded-xl text-center min-w-[90px] self-start md:self-center shadow-lg hover:scale-105 transition-transform duration-300" style={{ background: '#ECE7E2', color: '#4A7766' }}>
                <div className="text-sm font-bold uppercase tracking-wide">{event.date.month}</div>
                <div className="text-3xl font-bold">{event.date.day}</div>
              </div>

              {/* Info */}
              <div className="flex-1 w-full">
                <h3 className="text-2xl font-bold mb-2" style={{ color: '#ECE7E2' }}>{event.title}</h3>
                <p className="mt-2 mb-4 leading-relaxed text-lg" style={{ color: '#ECE7E2' }}>{event.description}</p>
                <div className="flex gap-6 text-base" style={{ color: '#ECE7E2' }}>
                  <span className="flex items-center gap-2">
                    <span style={{ color: '#C59C79' }}>550</span> 
                    {event.time}
                  </span>
                  <span className="flex items-center gap-2">
                    <span style={{ color: '#C59C79' }}>4cd</span> 
                    {event.location}
                  </span>
                </div>
              </div>

              {/* Action */}
              <div className="self-start md:self-center w-full md:w-auto">
                <button
                  className={`px-8 py-3 rounded-xl font-bold transition-all duration-300 w-full md:w-auto hover:scale-105 shadow-lg ${
                    event.actionType === 'primary'
                      ? ''
                      : ''
                  }`}
                  style={event.actionType === 'primary' ? { background: '#ECE7E2', color: '#4A7766' } : { border: '2px solid #ECE7E2', color: '#ECE7E2', background: '#4A7766' }}
                >
                  {event.action}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;