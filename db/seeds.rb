require 'json'
file = File.read('players.json')
players = JSON.parse(file)

puts "Deleting old stuff..."
    Player.destroy_all


puts "🌱 Seeding players..."
    players.each do |player|
        dob: player["DOB"],
        club: player["Club"],
        country: player["Country"],
        image: player["Image"],
        number: player["Number"],
        position: player["Position"],
        rating: player["Rating"],
        pace: player["Pace"],
        shot: player["Shot"],
        pass: player["Pass"],
        dribble: player["Dribble"],
        defence: player["Defence"],
        physical: player["Physical"],
        bench: player["Bench"],
    end
    
puts "✅ Done seeding!"