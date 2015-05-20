require 'rails_helper'

feature 'home page' do

  context 'welcome screen' do

    scenario 'should display the title' do
      visit '/'
      expect(page).to have_content 'Eds-Döner-Laden'
    end

  end

end
