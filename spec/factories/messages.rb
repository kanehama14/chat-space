FactoryBot.define do

  factory :message do
    content  {Faker::Lorem.sentence}
    image    {File.open("#{Rails.root}/public/images/ダックス_01.jpg")}
    group    
    user     
  end

end